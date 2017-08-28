export class LoggingService {
  logstatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
