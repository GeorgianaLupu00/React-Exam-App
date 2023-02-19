import React, { memo } from 'react';
import { Icon } from '@iconify/react';
import linkFill from '@iconify/icons-eva/link-fill';
import { ZoomableGroup, ComposableMap, Geographies, Geography } from 'react-simple-maps';
import {
  Button,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Typography
} from '@material-ui/core';
import myData from './features.json';

export default function MapChart() {
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState(false);
  const [link, setLink] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const [description, setDescription] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setTooltipContent = () => {};
  return (
    <div data-tip="">
      <ComposableMap>
        <ZoomableGroup>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    handleClickOpen();
                    setCountry(geo.properties.name);
                    setLink(geo.properties.link);
                    setImage(geo.properties.image);
                    setDescription(geo.properties.description);
                    console.log(country);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#ffc661',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#ff497d',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Dialog
        open={open}
        onClose={handleClose}
        country={country}
        link={link}
        image={image}
        description={description}
      >
        <DialogTitle align="center">
          <Typography variant="span">{country}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center">{description}</DialogContentText>
          <img style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} src={image} alt="" />
          <Button
            variant="contained"
            style={{ width: 200, align: 'center', margin: '2% 30% 2% 30%' }}
            startIcon={<Icon icon={linkFill} />}
            href={link}
          >
            Solve tests
          </Button>
        </DialogContent>
      </Dialog>
      ;
    </div>
  );
}
