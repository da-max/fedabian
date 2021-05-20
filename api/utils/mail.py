import threading
from flask_mailman import EmailMessage


class EmailThread(threading.Thread):

    def __init__(self, subject: str, body: str, recipient_list: list = None) -> None:
        """
        Init the EmailThread class.
        :param subject: subject of the mail
        :param body: content (with html) of the mail
        :param recipient_list: list of the recipient.
        """
        from run import app
        self.app = app
        self.subject = subject
        self.body = body
        if recipient_list is None:
            self.recipient_list = app.config['ADMIN_MAIL'].split(',')
        elif type(recipient_list) == list:
            self.recipient_list = recipient_list
        else:
            self.recipient_list = [recipient_list]
        super().__init__()

    def run(self):
        with self.app.app_context():
            msg = EmailMessage(subject=self.subject, body=self.body, to=self.recipient_list)
            msg.send()
