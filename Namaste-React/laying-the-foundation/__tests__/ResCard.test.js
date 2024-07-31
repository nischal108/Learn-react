import { render, screen } from "@testing-library/react";
import ResCard from '../src/components/ResCard';
import resCardData from '../mocks/resCardData';
import "@testing-library/jest-dom";
import { IMAGES_FOODS_URL } from "../utils/constants";
import { VegResCard } from '../src/components/ResCard';

it("should render the restaurant card with the data", () => {
    render(<ResCard name={resCardData.info.name} type={resCardData.info.locality} rating={resCardData.info.avgRating} image={`${IMAGES_FOODS_URL}/${resCardData.info.cloudinaryImageId}`} />);

    const title = screen.getByText(/Chinese Wok/i);
    
    expect(title).toBeInTheDocument();
});

it("should render the restaurant card with the data with veg label ", () => {


    const WrappedResCard = VegResCard(ResCard);

    render(<WrappedResCard data={resCardData.info} />);

    const vegLabel = screen.getByText(/veg/i);
  expect(vegLabel).toBeInTheDocument();
});

