import React, { useState, useEffect } from "react";
import { CardContent, CardHeader, makeStyles } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";

function Media() {
    const [videos, setvideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [videosPerPage, setVideosPerPage] = useState(1);

    useEffect(() => {
        const videoUrls = [];
        videoUrls.push("https://www.youtube.com/watch?v=qE-03EATjho");
        videoUrls.push("https://www.youtube.com/watch?v=uqMc4LqSQIE");
        videoUrls.push("https://www.youtube.com/watch?v=etQvoqugIWY");
        setvideos(videoUrls);
    }, [])

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const handlePageChange = (event, pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(videos.length / videosPerPage);
    return (
        <div>
            {currentVideos.map(videoUrl => (
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