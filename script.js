const n=null;
var easyLevel=[
                   [n,n,n,n,n,3,n,2,7],
                   [n,1,n,n,5,7,n,n,9],
                   [6,n,n,n,n,n,n,3,n],
                   [4,5,n,n,7,n,n,n,2],
                   [n,n,n,4,n,9,n,n,5],
                   [9,n,2,n,n,1,3,7,4],
                   [1,n,5,8,n,2,4,9,6],
                   [n,6,n,n,4,n,n,1,8],
                   [n,4,n,1,n,6,n,5,3]
                ]

var mediumLevel=[
                   [n,n,n,n,8,n,9,n,n],
                   [2,n,4,n,n,n,8,n,n],
                   [n,5,6,4,n,n,3,n,n],
                   [n,n,n,n,n,1,n,4,n],
                   [n,n,5,n,6,8,n,n,n],
                   [6,n,1,3,n,n,n,n,7],
                   [n,3,n,n,n,n,4,2,9],
                   [4,6,n,n,2,n,n,n,n],
                   [5,2,n,n,1,n,n,n,n]
                ]

 var hardLevel=[
                   [1,n,n,n,n,7,n,9,n],
                   [n,3,n,n,2,n,n,n,8],
                   [n,n,9,6,n,n,5,n,n],
                   [n,n,5,3,n,n,9,n,n],
                   [n,1,n,n,8,n,n,n,2],
                   [6,n,n,n,n,4,n,n,n],
                   [3,n,n,n,n,n,n,1,n],
                   [n,4,n,n,n,n,n,n,7],
                   [n,n,7,n,n,n,3,n,n]
                ]
const easyButton=document.getElementById('easy');
const mediumButton=document.getElementById('medium');
const hardButton=document.getElementById('hard');
// header buttons//
function easy(){
    var index=0;
    for(var i=0;i<easyLevel.length;++i)
    {
        for(var j=0;j<easyLevel.length;++j)
        {
            document.getElementById(index).value =easyLevel[i][j];
            if(easyLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(217, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
 document.getElementById('hard').disabled=true;
 document.getElementById('medium').disabled=true;
}
easyButton.onclick=easy;

function medium(){
    var index=0;
    for(var i=0;i<mediumLevel.length;++i)
    {
        for(var j=0;j<mediumLevel.length;++j)
        {
            document.getElementById(index).value =mediumLevel[i][j];
            if(mediumLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(216, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
    document.getElementById('hard').disabled=true;
 document.getElementById('easy').disabled=true;
}
mediumButton.onclick=medium;

function hard(){
    var index=0;
    for(var i=0;i<hardLevel.length;++i)
    {
        for(var j=0;j<hardLevel.length;++j)
        {
            document.getElementById(index).value =hardLevel[i][j];
            if(hardLevel[i][j]!=null)
            {
                document.getElementById(index).style.backgroundColor='rgb(217, 218, 208)'
            document.getElementById(index).disabled=true
            }
            ++index;
        }
    }
    document.getElementById('easy').disabled=true;
 document.getElementById('medium').disabled=true;
}
hardButton.onclick=hard;
//footer button//

const validateButton=document.getElementById('validate');

function validateRow()
{
    for(var i=0;i<=80;i+=9)
    {
        var arr=[];
        var index=0;
        for(var j=i;j<i+9;++j)
        {
          arr[index]=document.getElementById(j).value;
          index++;
        }
        var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
             return 'not good'
           }
           else{
               a='good'
           }
        }
        
    }
    return a;
}

function validateCol()
{
    for(var i=0;i<9;i++)
    {
        var arr=[];
        var index=0;
        for(var j=i;j<=i+72;j+=9)
        {
          arr[index]=document.getElementById(j).value;
          index++;
        }
        var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
             return 'not good CC'
           }
           else{
               a='good CC'
           }
        }
        
    }
    return a;
}

function validateBox()
{
    
    var tfi=0;
    for(var i=0;i<81;i+=3)
    {
        tfi++;
        var arr=[];
        var index=0;
        var tf=0;
      for(var j=i;j<i+21;++j)
      {
        ++tf;
        arr[index]=document.getElementById(j).value;
        index++;
        if(tf%3==0)
        {
            j=j+6;
        }
      }
      if(tfi%3==0)
    {
        i=i+18;
    }
    var a='';
        arr=arr.sort();
        for(var k=0;k<arr.length-1;++k)
        {
           if(arr[k]==arr[k+1])
           {
            return 'not good box'
           }
           else{
               a='good box'
           }
        }
    }
    return a;

}
 function validation()
 {
     if( validateBox()=='good box' && validateCol()=='good CC' && validateRow()=='good')
     {
         return 'solved'
     }
     else{
         return 'not solved'
     }
 }
 validateButton.onclick=()=>{
     if(validation()=='solved')
     {
         alert('Sudoku solved 🎊!!!')
     }
     else{
        alert('Try again 😊!!')
     }
 }

 