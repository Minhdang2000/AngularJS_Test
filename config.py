import configparser
import subprocess
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Đường dẫn đến file config.ini
config_file_path = '/home/pi/html/config/config.ini'  # Thay đổi đường dẫn tùy theo vị trí thực tế của file

def read_config():
    config = configparser.ConfigParser()
    config.read(config_file_path)

    host_ip = config.get('communication', 'HostIP')

    return host_ip

def apply_network_config(host_ip, gateway, node_ip):
    # Cài đặt giá trị IP và gateway bằng cách sử dụng lệnh subprocess
    # Đảm bảo rằng địa chỉ IP và gateway hợp lệ cho Raspberry Pi
    subprocess.run(['sudo', 'ifconfig', 'eth0', host_ip, 'netmask', '255.255.255.0'])

def restart_raspberry_pi():
    subprocess.run(['sudo', 'reboot'])

class ConfigFileEventHandler(FileSystemEventHandler):
    def __init__(self):
        super().__init__()
        self.previous_host_ip = None

    def on_modified(self, event):
        if event.src_path == config_file_path:
            host_ip = read_config()
            if host_ip != self.previous_host_ip:
                print("NodeIP changed to:", host_ip)
                apply_network_config(host_ip)
                self.previous_node_ip = host_ip
                restart_raspberry_pi()

if __name__ == "__main__":
    host_ip = read_config()

    # In các giá trị ra màn hình để kiểm tra
    print("HostIP:", host_ip)

    # Áp dụng cấu hình mạng từ file config.ini
    apply_network_config(host_ip)

    # Tạo một đối tượng Observer để theo dõi thay đổi của tệp config.ini
    event_handler = ConfigFileEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
