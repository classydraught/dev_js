function studentBody(firstName,lastName,age){
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;

      this.greeting= function(){
          return "Hello this is " + this.firstName +" "+this.lastName;
      }

}
var students=[]

var s1= new studentBody("Avinash","Bommi",5);
var s2=new studentBody("Lalitha","Vallabhaneni",10);
var s3=  new studentBody("Archana","Bommi",3);
students.push(s1);
students.push(s2);
students.push(s3);
for(x of students){
  for(k in x){
    console.log(x[k]);
  }
  console.log("------------------------------------------------");
}

