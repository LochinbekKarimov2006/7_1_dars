import React from 'react'
import data from "../json/main.json"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

function Home() {
    let filteredData = data.filter((item) => item.id <= 3);
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
  return (
    <div className='max-w-[1100px] mx-auto mt-[60px]'>
        <div className='flex items-center justify-between'>
            <div className='w-[50%]'>
                <h1 className='text-[50px] max-w-[80%] font-[700] line-[1px] leading-[50px]'>We are changing the way people shop</h1>
                <p className='mt-[30px] max-w-[90%]  tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                <NavLink to="/product" className='btn mt-[30px] btn-primary'>OUR PRODUCT</NavLink>
            </div>
            <div>
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div className="carousel-item">
    <img
      src="https://picsum.photos/653/672"
      className="rounded-box w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/700/622"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/730/605"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/650/748"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/785/657"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/798/793"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
  <div className="carousel-item">
    <img
      src="https://picsum.photos/606/724"
      className="rounded-box  w-[400px] h-[400px]" />
  </div>
</div>
            </div>
        </div>
        <div className='border-solid border-b-[1px] mt-[60px]'>
            <h2 className='text-[35px] font-[600] mb-[20px]'>Featured Products</h2>
        </div>
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto mb-[20px]'>
        {filteredData && filteredData.map((e) => (
                        <Card key={e.id} className="mt-6 bg-base-200 w-90 flex flex-col justify-between mx-[10px]">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={e.image}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <div className='flex flex-col justify-between h-[60%]'>
                                <CardBody>
                                    <Typography variant="h5" className="text-[#908f8f] mb-2" >
                                    {capitalizeFirstLetter(e.title)}
                                    </Typography>
                                    <Typography>
                                        {e.description}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <p className='my-3 text-center text-blue-600 font-[500] text-[20px]'>${e.price}</p>
                                    <Button className='w-full'>Read More</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    ))}
        </div>
    </div>
  )
}

export default Home