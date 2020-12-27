import axios from 'axios';
const gFormEmailID="entry.632989959";
const gFormNameID="entry.1358725510";
const gFormSubjectID="entry.1269663350";
const gFormMessageID="entry.1041888402";
const gFormURL='https://docs.google.com/forms/d/e/1FAIpQLSc01AEwWp6Quzbt0yBUKcHDSSp6pwqZGVc29ethiqHd4Nz3Bw/formResponse';


const sendEmail = (email,name,subject,message) => {
    const formData = new FormData();
    formData.append(gFormEmailID,email);
    formData.append(gFormNameID,name);
    formData.append(gFormSubjectID,subject);
    formData.append(gFormMessageID,message);
    axios.post( gFormURL, formData)
        .then(() => {
            window.location.href = '#/contactUsSuccess';
        }).catch((e) => {
        console.log('Error: ');
        console.log(e);
    })

}

export default sendEmail();