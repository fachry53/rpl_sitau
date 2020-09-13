function hnp(){
    $.ajax({
        url: '../../xml/akn.xml',
        //dataType: 'xml',
        error: function () {
            $('#table tbody').append('<tr id="status"><td colspan="7" class="text-center">Data Gagal Dimuat</td></tr>'); 
        },
        
        success: function (response) {
            var inv = $(response).find('hnp').children('invoice');
            
            var i;

            for (i=0; i < inv.length; i++){
                
                var baris = inv[i];
                
                var tgl = $(baris).children('tanggal').text();						
                var tgt =	$(baris).children('tenggat').text();
                var tp = $(baris).children('tp').text();
                var divisi = $(baris).children('divisi').text();
                var cur = $(baris).children('cur').text();
                var debit = $(baris).children('debit').text();
                var credit = $(baris).children('credit').text();
                                            
                $('#table tbody').append('<tr id="status">'+
                '<td>' + tgl + '</td>' +
                '<td>' + tgt + '</td>' +
                '<td>' + tp + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + cur + '</td>' +
                '<td>' + debit + '</td>' +
                '<td>' + credit + '</td>');				
            }
        },
       
    })
};    

function sumakn(){
    $.ajax({
        url: '../../xml/akn.xml',
        //dataType: 'xml',
        error: function () {
          alert(response); 
        },
        
        success: function (response) {
            var sum = $(response).find('sums');
                                        
           
            var din = $(sum[0]).children('days').text();	
            var min = $(sum[0]).children('month').text();					
            var yin = $(sum[0]).children('year').text();					
            var tin = $(sum[0]).attr('total');
            
            $('#dayin').append(din);
            $('#monthin').html(min);
            $('#yearin').html(yin);
            $('#totalin').html(tin);

            var dout = $(sum[1]).children('days').text();	
            var mout = $(sum[1]).children('month').text();					
            var yout = $(sum[1]).children('year').text();					
            
            $('#dayout').append(dout);
            $('#monthout').html(mout);
            $('#yearout').html(yout);
 
        },
    })
};

function sumsdm(){
    $.ajax({
        url: '../../../xml/sdm.xml',
        //dataType: 'xml',
        error: function(jqXHR, textStatus, errorThrown) {
            alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

            $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('errorThrown:');
            console.log(errorThrown);
        },

        /**
         * A function to be called if the request succeeds.
         */
        
        success: function (response) {
            var sum = $(response).find('attend');
                                        
           
            var tkar = $(sum).children('tkar').text();	
            var pres = $(sum).children('pres').text();					
            var abs = $(sum).children('abs').text();					
            var izin = $(sum).children('izin').text();					
            
            
            $('#tkar').html(tkar);
            $('#pres').html(pres);
            $('#abs').html(abs);
            $('#izin').html(izin);


            var sum = $(response).find('report');

            var awal = $(sum).children('awal').text();
            var avg = $(sum).attr('avg');



            $('#awal').html(awal);
            $('#avg').html(avg);


            var sum = $(response).find('recs');

            var open = $(sum).children('open').text();
            var appl = $(sum).children('appl').text();
            var step = $(sum).children('step').text();
            



            $('#open').html(open);
            $('#appl').html(appl);
            $('#step').html(step);


        },
    })

    
};

function sumdkar(){
    $.ajax({
        url: '../../../xml/sdm.xml',
        //dataType: 'xml',
        error: function () {
          alert(response); 
        },
        
        success: function (response) {
            var sum = $(response).find('dkar');
                                        
           
            var c = $(sum).children('cuti').text();	
            var a = $(sum).children('active').text();					
            var f = $(sum).children('fired').text();					
            var r = $(sum).children('resign').text();
            
            $('#cuti').html(c);
            $('#active').html(a);
            $('#fired').html(f);
            $('#resign').html(r);

            var sum = $(response).find('pegawai');
                                                              
            var i;

            for (i=0; i < sum.length; i++){
                
                var baris = sum[i];
                
                var no = (i+1) + '.';
                var nama = $(baris).children('nama').text();						
                var nip =	$(baris).children('nip').text();
                var divisi = $(baris).children('divisi').text();
                var cvlink = '<a href="cv/cv.jpg" style="color: royalblue;">Click here</a>';
                var status = $(baris).children('status').text();
                var ubahlink =  '<a class="btn btn-primary" href="#" style="color: white;"> Ubah status </a>';

                                            
                $('#table tbody').append('<tr>'+
                '<td>' + no + '</td>' +
                '<td>' + nama + '</td>' +
                '<td>' + nip + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + cvlink + '</td>' +
                '<td>' + status + '</td>' +
                '<td>' + ubahlink + '</td>');		
            }
        },


    })
};

function sumrek(){
    $.ajax({
        url: '../../../xml/sdm.xml',
        //dataType: 'xml',
        error: function () {
          alert(response); 
        },
        
        success: function (response) {
            var sum = $(response).find('recs');
                                        
           
            var o = $(sum).children('open').text();	
            var a = $(sum).children('appl').text();					
            var s = $(sum).children('step').text();	
            
            $('#open').html(o);
            $('#apply').html(a);
            $('#step').html(s);
        
            var sum = $(response).find('rekrut');
                                                              
            var i;

            for (i=0; i < 11; i++){
                
                var baris = sum[i];
                
                var no = (i+1) + '.';
                var nama = $(sum).children('nama').text();						
                var divisi = $(sum).children('divisi').text();
                var cvlink = '<a href="cv/cv.jpg" style="color: royalblue;">View</a>';
                var tanggal = $(sum).children('tanggal').text();
                                            
                $('#table tbody').append('<tr>'+
                '<td>' + no + '</td>' +
                '<td>' + nama + '</td>' +
                '<td>' + divisi + '</td>' +
                '<td>' + cvlink + '</td>' +
                '<td>' + tanggal + '</td>');	
            }
 
        },

        


    })
};

function chatload(state){
    $.ajax({
        url: '../../../../xml/chat.xml',
        //dataType: 'xml',
        error: function () {
          alert('gagal'); 
        },
        
        success: function (response) {

            if (state == "all"){

                $('#chatbox').html("")

                var msgs = $(response).find('msg');
                                                              
                var i;
    
                for (i=0; i < msgs.length; i++){
                    
                    var chat = msgs[i];
                    
                    var nama = $(chat).children('name').text();		
                    var prev = $(chat).children('preview').text();	
                    
                    
                    if ($(chat).attr('state') == "read"){

                       $('#chatbox').append('' +    
                        '<div class="row chat my-auto " style="height: 4rem; ">'+
                            '<div class="col-4 text-center my-2">'+
                                '<img src="../Img/profile.png" class="h-50 bg-secondary" style="border-radius: 50%;">'+
                            '</div>'+
                            '<div class="col-8 my-2">'+
                                '<div class="row font-weight-bolder">'+
                                        nama+
                                '</div>'+
                                '<div class="row text-secondary" style="font-size: small;">'+
                                        prev+
                                '</div>'+
                            '</div>'+
                        '</div>');

                    } else if ($(chat).attr('state') == "unread"){

                        $('#chatbox').append('' +    
                        '<div class="row chat  unread" style="height: 4rem; ">'+
                            '<div class="col-4 text-center my-2">'+
                                '<img src="../Img/profile.png" class="h-50 bg-secondary" style="border-radius: 50%;">'+
                            '</div>'+
                            '<div class="col-8 my-2">'+
                                '<div class="row font-weight-bolder">'+
                                        nama+
                                '</div>'+
                                '<div class="row text-secondary" style="font-size: small;">'+
                                        prev+
                                '</div>'+
                            '</div>'+
                        '</div>');
                    }

                    
                    
                }

                
            } else if (state == "read"){

                
                $('#chatbox').html("")

                var msgs = $(response).find('msg');
                                                            
                var i;
    
                for (i=0; i < msgs.length; i++){
                    
                    var chat = msgs[i];
                    
                    var nama = $(chat).children('name').text();		
                    var prev = $(chat).children('preview').text();	

                    if ($(chat).attr('state') == "read"){

                        $('#chatbox').append('' +    
                         '<div class="row chat my-auto " style="height: 4rem; ">'+
                             '<div class="col-4 text-center my-2">'+
                                 '<img src="../Img/profile.png" class="h-50 bg-secondary" style="border-radius: 50%;">'+
                             '</div>'+
                             '<div class="col-8 my-2">'+
                                 '<div class="row font-weight-bolder">'+
                                         nama+
                                 '</div>'+
                                 '<div class="row text-secondary" style="font-size: small;">'+
                                         prev+
                                 '</div>'+
                             '</div>'+
                         '</div>');
                    }
                }

             } else if (state == "unread"){

                
                $('#chatbox').html("")

                var msgs = $(response).find('msg');
                                                            
                var i;
    
                for (i=0; i < msgs.length; i++){
                    
                    var chat = msgs[i];
                    
                    var nama = $(chat).children('name').text();		
                    var prev = $(chat).children('preview').text();	

                    if ($(chat).attr('state') == "unread"){

                        $('#chatbox').append('' +    
                        '<div class="row chat  unread" style="height: 4rem; ">'+
                            '<div class="col-4 text-center my-2">'+
                                '<img src="../Img/profile.png" class="h-50 bg-secondary" style="border-radius: 50%;">'+
                            '</div>'+
                            '<div class="col-8 my-2">'+
                                '<div class="row font-weight-bolder">'+
                                        nama+
                                '</div>'+
                                '<div class="row text-secondary" style="font-size: small;">'+
                                        prev+
                                '</div>'+
                            '</div>'+
                        '</div>');
                    }
                }
            }
          
 
        },
    })
};

function time(){
    var t = new Date().toLocaleString();
    $('#timenow').html(t);
    setInterval(time, 1000);
}

function maintenance(){
    $(document).ready(function(){
   
        $('#maintenance').load('../../Error/main.html');
     
     });
}

function maintenance2(){
    $(document).ready(function(){
   
        $('#maintenance').load('../../../Error/main.html');
     
     });
}

function maintenance3(){
    $(document).ready(function(){
   
        $('#maintenance').load('../../../../Error/main.html');
     
     });
}

