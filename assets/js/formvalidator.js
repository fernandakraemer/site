function enviardados(){

    if(document.dados.name.value=="" ||
        document.dados.name.value.length < 2)
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

    if (document.dados.message.value.length < 20 )
    {
        alert( "É necessario preencher o campo MENSAGEM com mais de 20 caracteres!" );
        document.dados.message.focus();
        return false;
    }

    return true;
}