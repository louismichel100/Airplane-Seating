

l1 = process.argv[3];
c1 = process.argv[2];
l2 = process.argv[5];
c2 = process.argv[4];
l3 = process.argv[7];
c3 = process.argv[6];
l4 = process.argv[9];
c4 = process.argv[8];
val = process.argv[10];

l1 = parseInt(l1);
l2 = parseInt(l2);
l3 = parseInt(l3);
l4 = parseInt(l4);

c1 = parseInt(c1);
c2 = parseInt(c2);
c3 = parseInt(c3);
c4 = parseInt(c4);

val = parseInt(val);


var ok = 1;

var rang1 = new Array(l1);
var rang2 = new Array(l2);
var rang3 = new Array(l3);
var rang4 = new Array(l4);

for (var i = 0; i < l1; i++)
{
 rang1[i] = new Array(c1);
 for (var j = 0; j < c1; j++){
    rang1[i][j] = "--";
 }
}

for (var i = 0; i < l2; i++)
{
 rang2[i] = new Array(c2);
 for (var j = 0; j < c2; j++){
    rang2[i][j] = "$";
    
 }
}

for (var i = 0; i < l3; i++)
{
 rang3[i] = new Array(c3);
 for (var j = 0; j < c3; j++){
    rang3[i][j] = "@";
    
 }
}

for (var i = 0; i < l4; i++)
{
 rang4[i] = new Array(c4);
 for (var j = 0; j < c4; j++){
    rang4[i][j] = "#";
    
 }
}

j1 = 0;
while ((j1 < l1) || (j1 < l2) || (j1 < l3) || (j1 < l4)){
    if (j1 < l1) {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
        
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    
                    j1 = j1 + 1;
                }
                else {

                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                   
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    //console.log(rang1[j1], "            ", "            ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][2] = ok;
                        ok = ok + 1;
                    }

                    //console.log(rang1[j1], "            ", "            ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
    }
    else {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    //console.log("                    ", rang2[j1], rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    //console.log("           ", rang2[j1], rang3[j1], "          ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    //console.log("           ", rang2[j1], "         ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    if (ok < val + 1 ){
                        rang2[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang2[j1][3] = ok;
                        ok = ok + 1;
                    }

                    //console.log("           ", rang2[j1], "         ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    //console.log("           ", "            ", rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    if (ok < val + 1 ){
                        rang3[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang3[j1][1] = ok;
                        ok = ok + 1;
                    }

                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang4[j1][0] = ok;
                        ok = ok + 1;
                    }
                    
                    j1 = j1 + 1;
                }
                else {
                    j1 = j1 + 1;
                }
            }
        }
    }

}












var j1 = 0;
while ((j1 < l1) || (j1 < l2) || (j1 < l3) || (j1 < l4)){
    if (j1 < l1) {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    
                    //console.log(rang1[j1], rang2[j1], rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    //console.log(rang1[j1], rang2[j1], rang3[j1], "          ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log(rang1[j1], rang2[j1], "         ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    //console.log(rang1[j1], rang2[j1], "         ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log(rang1[j1], "            ", rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    //console.log(rang1[j1], "            ", rang3[j1], "         ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log(rang1[j1], "            ", "            ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if (ok < val + 1 ){
                        rang1[j1][0] = ok;
                        ok = ok + 1;
                    }

                    //console.log(rang1[j1], "            ", "            ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
    }
    else {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){

                    
                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log("                    ", rang2[j1], rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    //console.log("           ", rang2[j1], rang3[j1], "          ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){


                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log("           ", rang2[j1], "         ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    //console.log("           ", rang2[j1], "         ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log("           ", "            ", rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    //console.log("           ", "            ", rang3[j1], "         ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){

                    if (ok < val + 1 ){
                        rang4[j1][2] = ok;
                        ok = ok + 1;
                    }
                    //console.log("               ", "                   ", "                    ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    //console.log("           ", "            ", "            ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
    }

}


var j1 = 0;

while ((j1 < l1) || (j1 < l2) || (j1 < l3) || (j1 < l4)){
    if (j1 < l1) {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){
                    
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }


                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }


                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }

                    
                    console.log(rang1[j1], rang2[j1], rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if(ok< val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    console.log(rang1[j1], rang2[j1], rang3[j1], "          ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log(rang1[j1], rang2[j1], "         ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    console.log(rang1[j1], rang2[j1], "         ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log(rang1[j1], "            ", rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    console.log(rang1[j1], "            ", rang3[j1], "         ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log(rang1[j1], "            ", "            ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    if(ok < val+1){
                        rang1[j1][1] = ok;
                        ok = ok + 1;
                    }

                    console.log(rang1[j1], "            ", "            ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
    }
    else {
        if(j1 < l2){
            if(j1 < l3){
                if(j1 < l4){

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log("             ", rang2[j1], rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    console.log("           ", rang2[j1], rang3[j1], "          ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }

                    console.log("           ", rang2[j1], "         ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    if(ok < val+1){
                        rang2[j1][1] = ok;
                        ok = ok + 1;
                    }

                    if(ok < val+1){
                        rang2[j1][2] = ok;
                        ok = ok + 1;
                    }

                    console.log("           ", rang2[j1], "         ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
        else {
            if(j1 < l3){
                if(j1 < l4){

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log("           ", "            ", rang3[j1], rang4[j1]);
                    j1 = j1 + 1;
                }
                else {

                    console.log("           ", "            ", rang3[j1], "         ");
                    j1 = j1 + 1;
                }
            }
            else {
                if(j1 < l4){

                    if(ok < val+1){
                        rang4[j1][1] = ok;
                        ok = ok + 1;
                    }
                    console.log("               ", "                   ", "            ", rang4[j1]);
                    j1 = j1 + 1;
                }
                else {
                    console.log("           ", "            ", "            ", "            ");
                    j1 = j1 + 1;
                }
            }
        }
    }

}



























