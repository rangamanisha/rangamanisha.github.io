// import React from "react";
// import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
// import { Storage, Cloud, BarChart } from "@mui/icons-material";

// const skills = [
//   { title: "Product Leadership", icon: <BarChart />, details: "Roadmaps, KPI definition" },
//   { title: "Cloud Computing", icon: <Cloud />, details: "Azure, GCP, Power BI" },
//   { title: "Data Analytics", icon: <Storage />, details: "Big Data, AI, and advanced analytics" },
// ];

// const Skills = () => {
//   return (
//     <Box id="skills" sx={{ py: 8, backgroundColor: "#f9f9f9", textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         My Skills
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           gap: 2,
//           px: 2,
//           py: 4,
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": {
//             display: "none", // Hide scrollbar
//           },
//         }}
//       >
//         {skills.map((skill, index) => (
//           <Card
//             key={index}
//             sx={{
//               minWidth: 250,
//               maxWidth: 300,
//               mx: "auto",
//               height: "100%",
//               textAlign: "center",
//             }}
//           >
//             <CardContent>
//               <Avatar
//                 sx={{
//                   bgcolor: "primary.main",
//                   color: "#fff",
//                   width: 60,
//                   height: 60,
//                   mx: "auto",
//                   mb: 2,
//                 }}
//               >
//                 {skill.icon}
//               </Avatar>
//               <Typography variant="h6">{skill.title}</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {skill.details}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Skills;

import React from "react";
import { Box, Typography } from "@mui/material";

const skills = [
  { icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", label: "React JS" },
  { icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", label: "Node.js" },
  { icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", label: "Version Control" },
  { icon: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", label: "Cloud Computing" },
  { icon: "https://cdn.worldvectorlogo.com/logos/data-science-1.svg", label: "Data Science" },
  { icon: "https://cdn.worldvectorlogo.com/logos/ai.svg", label: "Artificial Intelligence" },
  { icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", label: "Jira" },
 
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: "#333" }}>
        These Are The Tools I Use to Build Stuff
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gap: 4,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={skill.icon}
              alt={skill.label}
              title={skill.label}
              sx={{
                width: 60,
                height: 60,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <Typography variant="body2" sx={{ color: "#555", fontWeight: "bold" }}>
              {skill.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
