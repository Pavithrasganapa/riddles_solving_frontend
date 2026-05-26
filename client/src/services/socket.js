import SockJS from 'sockjs-client';
import { over } from 'stompjs';

const socket = new SockJS('https://riddlessolvingbackend-production.up.railway.app/ws');

const stompClient = over(socket);

export default stompClient;