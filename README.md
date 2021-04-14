# HMS Rest API Service
> An simple client list application backend service.
> This application contains the rest api services talking to the frontend which can be found at [https://github.com/LORD-KAY/](hms-frontend)

### Clone the repository
```bash
git clone https://github.com/LORD-KAY/hms-api.git
```
Navigate to the root directory i.e the hms-api-service
```bash
cd hms-api/
```
### Running it locally
```bash
  yarn install
  yarn run start:watch or yarn run start
```
# OR
### Spin up the app api service container
Build the image
```bash
docker build -t hms-service .
```
Start the frontend from the Dockerfile
```bash
docker run -it -d --name hms-service -p 8090:8090 hms-service
```
Access the rest api from your browser or postman on http://localhost:8090/api/v1