// tsrfc
//tsrafce

type Props = {}

const GeneralType = (props: Props) => {
  const num1 = 1
  const num2 : number = 1

  const str : string = "string"
  const str2 = "From 26" + " With Love"
  
  type Person = {
    name : string,
    age : number
  }
  interface IPerson {
    name : string,
    age : number
  }

  const obj : Person = {
    name : "abc",
    age : 30
  }

  // array
  const people : Person[] = []

  // generic : chi chua 1 kieu du lieu
  const peopleG : Array<Person> = []

  people.push({
    name : "abcd",
    age : 31
  })

  // people.push({
  //   from : "abcd",
  //   age : 31
  // })

  for(const person of people){
    console.log(person.name)
  }

  // Tao ra 1 func khac
  enum PersonType{
    Student, Gamer, Coder
  } 

  return (
    <>
      {/* number, string, boolean, object, array, any(not recomend) */}
      <div>GeneralType</div> 
    </>
  )
}

export default GeneralType