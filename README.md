## Criação de Keys e Cerificate SSL (terminal)

O WebRTC precisa de uma origem segura para funcionar corretamente, assim durante o desenvolvimento é necessários criar Keys e Cerificate SSL para configurar um servidor HTTPs.

```sh
# Creating Keys and Cerificate (linux terminal)
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

# Get Decrypted Keys
openssl rsa -in keytmp.pem -out key.pem
```

## Project setup
```
npm install
```

### Hot-reloads for development
```sh
# HTTPS
npm run live-server-no-ssl

# HTTP
npm run live-server
```

### Server
```sh
# HTTPS
npm run server

# HTTP
npm run server-no-ssl
```
