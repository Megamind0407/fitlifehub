import React from "react";
import aboutus from "../assets/images/aboutus.jpg";
import bmilogo from "../assets/images/bmilogo.jpg";
import fitnesstracker from "../assets/images/fitnesstracker.jpg";
import caloriecalculator from "../assets/images/caloriecalculator.jpg";
import { Box, Container, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";

const Image = styled('img')({
  width: '600px', // Set the desired width
  height: '515px', // Set the desired height
  borderRadius: '8px', // Adjust the value as per your preference
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
});

export default function AboutUs() {
  return (
    <Container>
      <Box display="flex" justifyContent="space-around" gap="10rem">
        <div className="w-[32rem] my-5" >
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Workout
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-600 text-justify"
                >
                  A workout refers to a physical activity or exercise session performed with the intention of improving or maintaining one's fitness, strength, endurance, or overall health. It typically involves engaging in various types of exercises and movements, such as cardiovascular activities, strength training, flexibility exercises, or a combination of these.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Diet & Nutrition
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-600 text-justify"
                >
                  Diet and nutrition refer to the food and beverages we consume to nourish our bodies and provide the essential nutrients necessary for optimal health, growth, and function. It encompasses the choices we make regarding what we eat, how much we eat, and the overall balance of nutrients in our diet.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Dedication & Consistency
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-600 text-justify"
                >
                  Dedication and consistency are two important principles that contribute to achieving success and progress in various aspects of life, including fitness, personal goals, work, relationships, and personal development.

                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="my-5">
          <Image
            src={aboutus}
            alt=""
          />
        </div>
      </Box>
      <Typography variant="h3" align="center" color="#6674CC" mt={2}>
        Services Provided
      </Typography>
      <Box display="flex" justifyContent='center' alignItems="center" flexDirection="row" gap="3rem">
        <div className="rounded-lg p-6">
          <Link to='/BmiCalculator'>
            <Card className="mt-6 w-96">
              <CardBody>
                <img src={bmilogo} className="w-14 h-14 mb-4" alt="bmilogo" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  BMI Calculator
                </Typography>
                <Typography>
                  Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="rounded-lg p-6">
          <Link to='/FitnessTracker'>
            <Card className="mt-6 w-96">
              <CardBody>
                <img src={fitnesstracker} className="w-14 h-15 mb-4" alt="fitnesstracker" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Fitness Tracker
                </Typography>
                <Typography>
                  Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="rounded-lg p-6">
          <Link to='/CalorieCalculator'>
            <Card className="mt-6 w-96">
              <CardBody>
                <img src={caloriecalculator} className="w-14 h-14 mb-4" alt="caloriecalculator" />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Calorie Calculator
                </Typography>
                <Typography>
                  Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
      </Box>
      <Typography variant="h3" align="center" color="#6674CC" mt={2} font="sans-serif">
        Contact Us
      </Typography>
    </Container>
  );
}
