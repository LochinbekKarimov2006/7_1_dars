import React, { useContext, useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import data from "../json/main.json";
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/GlobalContext';

function Produkt() {
    const { value, setValue } = useContext(MyContext); 

    console.log(data)
    const [malumod, setMalumod] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [cartby,setCartby]=useState("")
    const [priceRange, setPriceRange] = useState(100000);
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        setMalumod(data);
    }, []);

    const filterlash = () => {
        let filteredData = data;
    
        if (searchTerm) {
            filteredData = filteredData.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedOption) {
            filteredData = filteredData.filter((item) =>
                item.category === selectedOption
            );
        }
        if (sortOrder) {
            filteredData = filteredData.filter((item) =>
            item.title.toLowerCase().includes(sortOrder.toLowerCase())
        );
        }
        if (priceRange) {
            filteredData = filteredData.filter((item) =>
                item.price <= priceRange
            );
        }
        if (isChecked) {
            filteredData = filteredData.filter((item) =>
                item.shipping === isChecked
            );
        }
        setMalumod(filteredData);
        console.log('Search Term:', searchTerm);
        console.log('Selected Option:', selectedOption);
        console.log('Sort Order:', sortOrder);
        console.log('Price Range:', priceRange);
        console.log('Checkbox Status:', isChecked);
    };
function tozalash(e){
    setMalumod(data);
    setIsChecked(true)
    setPriceRange(100000)
    setSortOrder("")
    setSelectedOption("")
    setSearchTerm("")
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
    return (
        <div>
            <div>
                <form className='max-w-[1100px] mx-auto' action="">
                    <div className='div-1 mt-[90px] bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
                        <div>
                            <label htmlFor="search">Search Product</label>
                            <input
                                id="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input input-bordered w-full h-[32px]"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="option">Select Category</label>
                            <select
                                id="option"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="select select-bordered w-full select-xs font-[700] h-[32px]"
                            >
                                <option value="" disabled defaultValue>All</option>
                                <option>Tables</option>
                                <option>Chairs</option>
                                <option>Kids</option>
                                <option>Sofas</option>
                                <option>Beds</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sortOrder">Select Company</label>
                           
                            <input
                                id="search"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="input input-bordered w-full h-[32px]"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="sortOrder">Sort By</label>
                            <select
                                id="sortOrder"
                                value={cartby}
                                onChange={(e) => setCartby(e.target.value)}
                                className="select select-bordered w-full font-[700] select-xs h-[32px]"
                            >
                                <option value="" disabled defaultValue>a-z</option>
                                <option>a-z</option>
                                <option>z-a</option>
                                <option>high</option>
                                <option>low</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="priceRange" className='text-[14px] flex justify-between font-[600]'>
                                <span>Select Price</span>
                                <span>${priceRange.toLocaleString()}</span>
                            </label>
                            <input
                                id="priceRange"
                                type="range"
                                min="0"
                                max="100000"
                                step="1"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="range range-primary range-sm"
                            />
                            <label htmlFor="priceRange" className='text-[13px] flex justify-between font-[600]'>
                                <span>0</span>
                                <span>Max: $1.000.00</span>
                            </label>
                        </div>
                        <div className='flex flex-col items-center'>
                            <label htmlFor="checkbox">Free shipping</label>
                            <input onChange={() => setIsChecked(isChecked)}  type="checkbox" name="shipping" className="mt-2 checkbox checkbox-primary checkbox-sm"/>
                        </div>
                        <button
                            type='button'
                            onClick={filterlash}
                            className='btn btn-sm btn-primary'
                        >
                            Filter
                        </button>
                        <button
                            type='button'
                            onClick={() => { tozalash()}}
                            className='btn btn-sm btn-secondary'
                        >
                            Reset
                        </button>
                    </div>
                </form>
                <div className='bg-base-200 my-7 py-3 rounded-[8px] flex justify-between max-w-[1100px] mx-auto'>
                    <p className='text-[20px] font-[600] mx-[20px]'>{malumod.length} Products</p>
                </div>
                <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto'>
                    {malumod && malumod.map((e) => (
                        <NavLink to="/toliq" onClick={()=>{setValue(e)}} key={e.id}>

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
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Produkt;
