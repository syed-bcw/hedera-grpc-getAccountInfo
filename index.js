
const { Client, AccountInfoQuery, } = require("@hashgraph/sdk");
require("dotenv").config();

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;

(async () => {
    // const client = Client.forMainnet()
    const client = Client.forTestnet()
    console.log("myAccountId", myAccountId)
    console.log("myPrivateKey", myPrivateKey)
    client.setOperator(myAccountId, myPrivateKey);

    new AccountInfoQuery().setAccountId("0.0.98").execute(client).then(resp => {
        console.log(resp)
        console.log(JSON.stringify(resp))
    });

})()