import React, { useState, useEffect } from "react";
import { CardContent, CardHeader, makeStyles } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import Axios from "axios";

function Media() {
    const [videos, setvideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage, setVideosPerPage] = useState(1);
    const resourceType = "Media";
    const resourceClassID = "SPN1130";

    useEffect(() => {
        getData()
    }, []);

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(videos.length / videosPerPage);

    const getData= async() => {
        // set entire question with question, answer, and two random answers
        const response=await Axios.get("http://localhost:1521/getResourceData", {
            params: {
                type: resourceType,
                classID: resourceClassID
            }
        }) 
        var str = response.data;
        const videoUrls = [];
        for (let i = 0; i < str.length; i++) {
            videoUrls.push(str[i][0]);
            console.log(videoUrls[i]);
        }
        setvideos(videoUrls);
    }

    return (
        <div>
            {currentVideos.map(videoUrl => (
                <iframe
                     width="100%"
                     height="55%"
                     src={`https://www.youtube.com/embed/${videoUrl.split('=')[1]}`}
                     // src="https://www.youtube.com/embed/9rBgSgk4vmw"
                     title={videoUrl}
                     allowFullScreen
                 ></iframe>
            ))}
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </div>
    )
}

export default Media;