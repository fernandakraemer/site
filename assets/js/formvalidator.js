function enviardados(){

    if(document.dados.name.value=="" ||
        document.dados.name.value.length < 8)
    {
        alert( "Preencha campo NOME corretamente!" );
        document.dados.name.focus();
        return false;
    }


    if( document.dados._replyto.value=="" ||
        document.dados._replyto.value.indexOf('@')==-1 ||
        document.dados._replyto.value.indexOf('.')==-1 )
    {
        alert( "Preencha campo E-MAIL corretamente!" );
        document.dados._replyto.focus();
        return false;
    }

    if (document.dados.message.value=="")
    {
        alert( "Preencha o campo MENSAGEM!" );
        document.dados.message.focus();
        return false;
    }

    if (document.dados.tx_mensagem.value.length < 50 )
    {
        alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
        document.dados.message.focus();
        return false;
    }

    return true;
}