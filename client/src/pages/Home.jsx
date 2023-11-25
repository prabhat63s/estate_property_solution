import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  // console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex text-center items-center justify-center flex-col gap-6 p-16 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find Better Places to Live, Work and Wonder...
        </h1>
        <div className="text-gray-600 text-xs sm:text-sm">
          Find, Buy & Own Your Dream Home or Sell & Rent your property faster.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-white py-2 px-4 rounded-md w-fit font-bold hover:font-medium bg-slate-600 hover:bg-slate-400"
        >
          Let&apos;s get started
        </Link>
      </div>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 mb-10">
        <div className="">
          <h2 className="text-2xl font-semibold text-slate-600">
            Recent offers
          </h2>
          {offerListings && offerListings.length > 0 && (
            <div className="space-y-4 flex flex-col">
              <Link
                className="text-sm text-blue-800 hover:font-medium"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
              <div className=" flex flex-wrap gap-16">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-slate-600">
            Recent places for rent
          </h2>
          {rentListings && rentListings.length > 0 && (
            <div className="space-y-4 flex flex-col">
              <Link
                className="text-sm text-blue-800 hover:font-medium"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
              <div className="flex flex-wrap gap-16">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-slate-600">
            Recent places for sale
          </h2>
          {saleListings && saleListings.length > 0 && (
            <div className="space-y-4 flex flex-col">
              <Link
                className="text-sm text-blue-800 hover:font-medium"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
              <div className="flex flex-wrap gap-16">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
