# HTTPS Setup

- Cài đặt [mkcert](https://github.com/FiloSottile/mkcert).
- Mở terminal tại root folder.
- Chạy command

```
mkdir ssl && cd ssl
mkcert -key-file ./key.pem -cert-file ./cert.pem "localhost"
```
