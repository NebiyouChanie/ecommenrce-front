 import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

 export const revalidate = 0;

const HomePage = async() => {
     //const billboard = await getBillboard("5e9d72f5-afe9-4805-b740-c0b2bf3a941d") 
  return (
    <Container>
        <div className="space-y-10 pb-10">
            {/* <Billboard data={billboard}/> */}hi
        </div>
    </Container>
  )
}

export default HomePage