import React, {useEffect,useState} from 'react';
import { Box } from '@chakra-ui/react';

import EventBlogProjectMainSection from '../../components/EventBlogProjectMainSection/EventBlogProjectMainSection';

// For Data
import Data from './Data';
import axiosInstance from '../../utils/axiosInstance';
import EventModalSectionRight from '../../components/EventModalSection/EventModalSectionRight';
import EventModelSectionLeft from '../../components/EventModalSection/EventModelSectionLeft';

const ProjectMainSection = () => {
  const [events,setEvents]=useState([]);

  useEffect(()=>{
    const fetchEvents=async()=>{
      await axiosInstance.get('/api/events/getEvents')
      .then((res)=>{
        if(res.status===200)setEvents(res.data.data);
      })
      .catch(function (error){
        connsole.log(error);
      });
    }
    fetchEvents();
    console.log(events);
  },[]);

  const fetchEvent=async(id)=>{
    await axiosInstance.get(`/api/events/getEvents/${id}`)
    .then((res)=>{
      if(res.status===200) return res.data.data;
    })
    .catch(function (error){
      connsole.log(error);
    });
  }

  return (
    <main>
      <EventBlogProjectMainSection
        title="Events"
        imageURL="/Images/Event_Image_1.png"
        sectionText="Microsoft Learn Students’ Community is paramount in creating one of the most influential events some of which include the BIT by BIT and Capture the Flag contests. These flagship events have set the benchmarks in the technical societies with our esteemed guests. Our peer-to-peer learning strategy has made our response rate phenomenal and has helped the participants by a substantial improvement in their vocational skills, problem-solving skills, and advancements in the technical domain by providing them hand-curated content from the experts."
      ></EventBlogProjectMainSection>

      {/* Main Section */}

      <Box marginTop="5rem" fontFamily="Poppins">
        {Data.map((data, index) => {
          return index % 2 ? (
            <EventModalSectionRight
              key={index}
              eventTitle={data.eventTitle}
              eventDesc={data.eventDesc}
              modalBody={data.modalBody}
              eventImg={data.eventImg}
              footfall={data.footfall}
              peopleOrganising={data.peopleOrganising}
              dateTime={data.dateTime}
              eventSpan={data.eventSpan}
            ></EventModalSectionRight>
          ) : (
            <EventModelSectionLeft
              key={index}
              eventTitle={data.eventTitle}
              eventDesc={data.eventDesc}
              modalBody={data.modalBody}
              eventImg={data.eventImg}
              footfall={data.footfall}
              peopleOrganising={data.peopleOrganising}
              dateTime={data.dateTime}
              eventSpan={data.eventSpan}
            ></EventModelSectionLeft>
          );
        })}
      </Box>
    </main>
  );
};

export default ProjectMainSection;
