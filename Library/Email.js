class InBlue {
  constructor (apiKey = '') {
    this.Sib = require ('sib-api-v3-sdk');
    this.client = this.Sib.ApiClient.instance;
    this.apiKey = this.client.authentications['api-key'];
    this.apiKey.apiKey = apiKey;
    this.tranEmailApi = new this.Sib.TransactionalEmailsApi ();
  }
  sendMail (senderMail = "", senderName = "", to = [], subject = "", textContent = "", htmlContent = "") {
    let recs = []
    for (let i = 0; i < to.length; i++) {
      const element = to[i];
      recs.push({email:element})
    }
    this.tranEmailApi
      .sendTransacEmail ({
        sender: {email:senderMail, name:senderName},
        to: recs,
        subject: subject,
        textContent: textContent,
        htmlContent: htmlContent,
        params: {
          role: 'Frontend',
        },
      })
      .then (console.log)
      .catch (console.log);
  }
}

module.exports = {
  InBlue: InBlue,
};
