import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

interface IGalleryProps {
    images: string[]
}

const useStyles = makeStyles({
    image: {
        width: "100%",
    },
});

const Gallery: React.FC<IGalleryProps> = (props) => {

    const classes = useStyles();
    const [index, setIndex] = React.useState<number>(0);

    React.useEffect(() => {
        const t = setTimeout(() => {
            if (index === props.images.length - 1) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }, 2000);

        return () => {
            clearTimeout(t);
        }
    }, [props.images, index]);

    return (
       <img src={props.images[index]} className={classes.image} />
    );
}

export default Gallery;
