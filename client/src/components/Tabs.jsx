import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkIcon from '@mui/icons-material/Link';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [clickedLinks, setClickedLinks] = useState([]);

  useEffect(() => {
    // Load the progress value from localStorage on component mount
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10));
    }
  }, []);

  useEffect(() => {
    // Update the progress value in localStorage whenever it changes
    localStorage.setItem('progress', progress.toString());
  }, [progress]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleVideoComplete = () => {
    const handleVideoEnded = () => {
      console.log('Video ended!');
    };

    if (!videoCompleted && progress === 0) {
      setVideoCompleted(true);
      setProgress((prevProgress) => prevProgress + 25);
    }
  };

  const handleLinkClick = (link) => {
    if (!clickedLinks.includes(link) && progress < 100) {
      setProgress((prevProgress) => prevProgress + 25);
      setClickedLinks((prevClickedLinks) => [...prevClickedLinks, link]);
    }
  };

  const handleDownloadClick = () => {
    if (progress < 100) {
      setProgress((prevProgress) => prevProgress + 25);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div style={{ marginTop: '1rem', marginLeft: '1rem', marginBottom: '3rem' }}>
        <span>Progress: {progress}%</span>
        <div
          style={{
            width: '20%',
            height: '20px',
            backgroundColor: '#ccc',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#003662',
            }}
          />
        </div>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <PlayCircleOutlineIcon style={{ marginRight: '0.5rem' }} />
                <span>Lesson</span>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LibraryBooksIcon style={{ marginRight: '0.5rem' }} />
                <span>Materials</span>
              </div>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* Content: YouTube video for Lesson */}
        <p style={{ marginBottom: '1rem' }}>Watch the video below to find out more!</p>
        <iframe
          marginTop="1rem"
          width="650"
          height="405"
          src="https://www.youtube.com/embed/Ya1G5MAb5oI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onEnded={handleVideoComplete}
        ></iframe>
      </TabPanel>

      <TabPanel value={value} index={1}>
        {/* Content: Downloadable PDFs for Materials */}
        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <a
            href="https://vervoe.com/halo-and-horns-effect-in-hiring/"
            onClick={() => handleLinkClick('link1')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>10 min read: </b>
            <br />
            <LinkIcon style={{ height: '3rem', marginRight: '0.5rem' }} />
            How To Stop the Halo and Horns Effect in Hiring and Reduce Unconscious Bias
          </a>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem', paddingTop: '1rem' }}>
          <a
            href="https://www.beapplied.com/post/what-is-the-halo-and-horn-effect-and-how-does-it-influence-hiring"
            onClick={() => handleLinkClick('link2')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>4 min read: </b>
            <br />
            <LinkIcon style={{ height: '3rem', marginRight: '0.5rem' }} />
            What Is the Halo and Horn Effect and How Does It Influence Hiring?
          </a>
        </div>

        <div style={{ paddingTop: '1rem' }}>
          <a
            href="../src/assets/bias-halo-effect-and-horn-effect-a-systematic-literature-review.pdf"
            download
            onClick={handleDownloadClick}
            rel="noopener noreferrer"
          >
            <b>30 min read: </b>
            <br />
            <FileDownloadIcon style={{ height: '3rem', marginRight: '0.5rem' }} />
            Bias, Halo Effect and Horn Effect: A Systematic Literature Review
          </a>
        </div>
      </TabPanel>
    </Box>
  );
}
