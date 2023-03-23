function hitungbmi() {
	var bb = document.getElementById('beratbadan').value;
	var tb = document.getElementById('tinggibadan').value;
    var hasilnama = document.getElementById('nama').value;
    var umr = document.getElementById('umur').value;
	
    if(bb > 0 && tb > 0 && umr > 0){	
            var bmi = bb/(tb/100*tb/100)
            document.getElementById('bmi').innerHTML = bmi;
            document.getElementById('hasilnama').innerHTML= hasilnama;
            
            if(bmi < 18.5){
                //alert("Anda perlu meningkatkan berat badan!");
                //Header.innerHTML = "Kurang berat badan, Anda dan perlu meningkatkan berat badan!";
                document.getElementById('hasil').innerHTML = "Anda perlu meningkatkan berat badan!";
                document.getElementById('hasilbmiantara').innerHTML = "Hasil BMI lebih kecil dari 18.5, artinya Anda perlu meningkatkan berat badan!";
                document.getElementById('penyakitdaribb').innerHTML = "Penyakit yang bisa diakibatkan dari kekurangan berat badan adalah : <br>Malnutrisi<br>Infertilitas<br>Sakit Osteoporosis<br>Turunnya Imun Tubuh";
            }
            else if(bmi >= 18.5 && bmi <= 24.9){
                //alert("Selamat, Anda berada dikategori normal dan sehat.");
               // Header.innerHTML = "Selamat, Anda berada dikategori normal dan sehat.";
                document.getElementById('hasil').innerHTML = "Selamat, Anda berada dikategori normal dan sehat.";
                document.getElementById('hasilbmiantara').innerHTML = "Hasil BMI dari 18.5 sampai dengan 24.9, artinya Anda berada dikategori normal dan sehat.";
                document.getElementById('penyakitdaribb').innerHTML = "Teruslah menjaga berat badan anda tetap proposional dengan cara : <br>Olahraga teratur<br>Istirahat yang cukup<br>Makan secara perlahan<br>Sarapan tinggi protein";
            }
            else if(bmi >= 25 && bmi <= 29.9){
                //alert("Anda memiliki berat badan yang berlebih!");
               // Header.innerHTML = "Anda memiliki berat badan yang berlebih!";
                document.getElementById('hasil').innerHTML = "Anda memiliki berat badan yang berlebih!";
                document.getElementById('hasilbmiantara').innerHTML = "Hasil BMI dari 25 sampai dengan 29.9, Anda memiliki berat badan yang berlebih!";
                document.getElementById('penyakitdaribb').innerHTML = "Penyakit yang bisa diakibatkan dari berat badan berlebih adalah : <br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthisis";
            } 
            else if (bmi >=30){
                //alert("Anda berada dikategori Kegemukan (Obesitas)!");
               // Header.innerHTML = "Anda berada dikategori Kegemukan (Obesitas)!";
                document.getElementById('hasil').innerHTML = "Anda berada dikategori Kegemukan (Obesitas)!"; 
                document.getElementById('hasilbmiantara').innerHTML = "Hasil diatas 30, artinya Anda berada dikategori Kegemukan (Obesitas)!";
                document.getElementById('penyakitdaribb').innerHTML = "Penyakit yang bisa diakibatkan dari obesitas adalah : <br>Asma<br>Ginjal<br>Prospat<br>Varises";    
            }
    }
    else{
        alert("Input yang Anda masukan salah, Mohon masukkan data yang benar!");
    }
}
 
