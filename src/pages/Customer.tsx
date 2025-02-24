import Header from "@/components/Header"

const temp = [
    {
        id: 1,
        name: "Customer 1",
        address: "Address 1 asd 112 dasd 121dasda ",
        phone: "123-456-7890"
    },
    {
        id: 2,
        name: "Customer 2",
        address: "Address 2 1 asd 112 dasd 121dasda",
        phone: "987-654-3210"
    },
    {
        id: 3,
        name: "Customer 3",
        address: "Address 3 1 asd 112 dasd 121dasda",
        phone: "555-555-5555"
    },
    {
        id: 4,
        name: "Customer 4",
        address: "Address 4 1 asd 112 dasd 121dasda",
        phone: "111-111-1111"
    }
]
const Customer = () => {
    console.log(temp)
  return (
    <div className="w-full">
        <Header />
    </div>
  )
}

export default Customer