import React, { useState, useEffect } from "react";
import { CardContent, CardHeader, makeStyles } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import Axios from "axios";

function Polls() {
    const [polls, setpolls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pollsPerPage, setPollsPerPage] = useState(1);
    const resourceType = "Poll"
    const resourceClassID = "SPN1130"

    useEffect(() => {
        getData()
    }, [])

    const indexOfLastVideo = currentPage * pollsPerPage;
    const indexOfFirstVideo = indexOfLastVideo - pollsPerPage;
    const currentVideos = polls.slice(indexOfFirstVideo, indexOfLastVideo);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(polls.length / pollsPerPage);

    const getData= async() => {
        // set entire question with question, answer, and two random answers
        const response=await Axios.get("http://localhost:1521/getResourceData", {
            params: {
                type: resourceType,
                classID: resourceClassID
            }
        }) 
        var str = response.data;
        const pollUrls = [];
        for (let i = 0; i < str.length; i++) {
            pollUrls.push(str[i][0]);
        }
        setpolls(pollUrls);
    }

    return (
        <div>
            {currentVideos.map(pollUrl => (
                <iframe
                     width="100%"
                     height="55%"
                     //src={`https://www.youtube.com/embed/${pollUrl.split('=')[1]}`}
                     src={pollUrl}
                     // src="https://www.youtube.com/embed/9rBgSgk4vmw"
                     title={pollUrl}
                     allowFullScreen
                 ></iframe>
            ))}
            <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
        </div>
    )
}

export default Polls;