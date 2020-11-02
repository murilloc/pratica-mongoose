import mongoose from 'mongoose';

mongoose.connect('mongodb://mongoserver/igti', {
    auth: {
        authSource: "admin"
    },
    user: "root",
    pass: "changeme!",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((result) => {
        console.log('Database Connected');
        runActions();
    }).catch((error) => {
    console.log(error);
});


const runActions = () => {

// criação do modelo
    const accountSchema = mongoose.Schema({
        name: {type: String, required: true},
        agencia: {type: Number, required: true},
        conta: {type: Number, required: true},
        balance: {type: Number, required: true, minValue: 0}
    });


// associando o modelo a coleçao
    mongoose.model('account', accountSchema);

    const account = mongoose.model('account');


    const myAccount = new account({
        name: 'Murillo Cesar Pinto Nogueira',
        agencia: 50,
        conta: 445343,
        balance: 2600.00
    });

    myAccount.save().then(() => {
        console.log('Document saved');
    }).catch((err) => {
        console.log('The document was not saved:' + err);
    });

}

