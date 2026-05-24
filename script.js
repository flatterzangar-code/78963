import { supabase } from './supabase.js';

const form =
document.getElementById('form');

form.addEventListener('submit', async (e) => {

e.preventDefault();

try {

const studentName =
document.getElementById('studentName').value;

const iin =
document.getElementById('iin').value;

const phone =
document.getElementById('phone').value;

const entScore =
document.getElementById('entScore').value;

const email =
document.getElementById('email').value;

const speciality =
document.getElementById('speciality').value;

const birthDate =
document.getElementById('birthDate').value;

const schoolName =
document.getElementById('schoolName').value;


if(iin.length !== 12){

alert('ИИН 12 сан болуы керек');

return;

}

const region =
document.getElementById('regionSelect').value;

const district =
document.getElementById('districtSelect').value;

const placeType =
document.getElementById('placeType').value;

const village =
document.getElementById('field_10').value;

const address =
document.getElementById('field_11').value;

const fatherName =
document.getElementById('fatherName').value;

const motherName =
document.getElementById('field_5').value;

const fatherPhone =
document.getElementById('field_2').value;

const motherPhone =
document.getElementById('field_7').value;

const manyChildren =
document.getElementById('manyChildren').checked;

// FILES

const studentIdCard =
document.getElementById('entCertificate').files[0];

const fatherIdCard =
document.getElementById('field_18').files[0];

const motherIdCard =
document.getElementById('field_19').files[0];

const entCertificate =
document.getElementById('field_20').files[0];

const attest9 =
document.getElementById('attest9').files[0];

const attest11 =
document.getElementById('attest11').files[0];

const manyChildrenFile =
document.getElementById('manyChildrenFile').files[0];

// UPLOAD FUNCTION

async function uploadFile(file){

if(!file) return '';

const extension =
file.name.split('.').pop();

const fileName =
Date.now() + "_" +
Math.random().toString(36).substring(2,10)

* "." + extension;

const { error } =
await supabase.storage
.from('abiturient-documents')
.upload(fileName, file);

if(error){

console.log(error);

return '';

}

return 'https://hdgwdhdegazenavghqch.supabase.co/storage/v1/object/public/abiturient-documents/' + fileName;

}

// UPLOAD FILES

const studentIdCardUrl =
await uploadFile(studentIdCard);

const fatherIdCardUrl =
await uploadFile(fatherIdCard);

const motherIdCardUrl =
await uploadFile(motherIdCard);

const entCertificateUrl =
await uploadFile(entCertificate);

const attest9Url =
await uploadFile(attest9);

const attest11Url =
await uploadFile(attest11);

const manyChildrenFileUrl =
await uploadFile(manyChildrenFile);

// SAVE DATA

const data = {

student_name: studentName,
iin,
phone,
ent_score: entScore,
email,
speciality,
birth_date: birthDate,
school_name: schoolName,


region,
district,
place_type: placeType,
village,
address,

father_name: fatherName,
mother_name: motherName,

father_phone: fatherPhone,
mother_phone: motherPhone,

many_children: manyChildren,

student_id_card:
studentIdCardUrl,

father_id_card:
fatherIdCardUrl,

mother_id_card:
motherIdCardUrl,

ent_certificate:
entCertificateUrl,

attest9:
attest9Url,

attest11:
attest11Url,

many_children_file:
manyChildrenFileUrl,

created_at:
new Date()

};

// SAVE TO SUPABASE

const { error } = await supabase
.from('abiturients')
.insert([data]);

if(error){

console.log(error);

alert("Қате шықты ❌");

return;

}

alert("Анкета сақталды 🚀");

form.reset();

}
catch(error){

console.log(error);

alert("Қате шықты ❌");

}

});
