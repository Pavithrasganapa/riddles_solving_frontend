import SockJS from 'sockjs-client';
import { over } from 'stompjs';

const socket = new SockJS('http://localhost:8080/ws');

const stompClient = over(socket);

export default stompClient;