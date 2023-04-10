import React, { useState, useEffect } from "react";
import { CardContent, CardHeader, makeStyles } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";

function Polls() {
    const [polls, setpolls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pollsPerPage, setPollsPerPage] = useState(1);

    useEffect(() => {
        const videoUrls = [];
        videoUrls.push("https://ufl.qualtrics.com/jfe/form/SV_4GRWrdQZ988kBVQ");
        videoUrls.push("https://ufl.qualtrics.com/jfe/form/SV_87wJyuwhJa6Z29o");
        setpolls(videoUrls);
    }, [])

    const indexOfLastVideo = currentPage * pollsPerPage;
    const indexOfFirstVideo = indexOfLastVideo - pollsPerPage;
    const currentVideos = polls.slice(indexOfFirstVideo, indexOfLastVideo);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(polls.length / pollsPerPage);
    return (
        <div>
            {currentVideos.map(pollUrl => (
                // <Card key={videoUrl}>
                //     <CardHeader title="t">
                //         <CardContent>
                //             <iframe
                //                 width="100"
                //                 height="100"
                //                 // src={`https://www.youtube.com/embed/${videoUrl.split('=')[1]}`}
                //                 src="https://www.youtube.com/embed/9rBgSgk4vmw"
                //                 title={videoUrl}
                //                 allowFullScreen
                //             ></iframe>
                //         </CardContent>
                //     </CardHeader>
                // </Card>
                <iframe
                     width="100%"
                     height="80%"
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