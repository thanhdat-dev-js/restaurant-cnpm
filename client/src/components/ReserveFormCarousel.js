import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    { imgPath: 'http://ichihanasushi.vn/images/repo/NI27-KakiFreshLaptop.jpg' },
    { imgPath: 'http://ichihanasushi.vn/images/repo/SAS6-Nishin2.jpg' },
    { imgPath: 'http://ichihanasushi.vn/images/repo/SAS4-Hamachi2Sw80.jpg' },
    { imgPath: 'http://ichihanasushi.vn/images/repo/SAS2-SakeSashimi2.jpg' },
    { imgPath: 'https://ichihanasushi.vn/images/repo/SAS5-ToroMekajiki.jpg' },
];

function ReserveFormCarousel(props) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;


    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={props.sx}>
            <Box sx={{ maxWidth: '60%', flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '150%',
                                        maxWidth: '150%'
                                    }}
                                    src={step.imgPath}
                                ></Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Box sx={{}}>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        backButton={<div></div>}
                        nextButton={<div></div>}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default ReserveFormCarousel;
