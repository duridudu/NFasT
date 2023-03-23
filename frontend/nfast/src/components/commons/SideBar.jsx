import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import cat from "../../assets/cat.png";

export default function Example() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleDrawerOpen} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={cat} />
        </IconButton>
      </Tooltip>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <Box sx={{ width: 300 }} role="presentation">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "30px",
              padding: "16px",
              height: "40%",
              backgroundColor: "#EAEAED",
            }}
          >
            <Avatar
              alt="Profile picture"
              src={cat}
              sx={{ width: "80px", height: "80px" }}
            />
            <Typography fontSize={20}>
              <span style={{ color: "purple" }}>은동동</span>님, 환영합니다.
            </Typography>
          </Box>
          <Divider />
          <List>
            {[
              "사용한 NFT",
              "거래 내역",
              "나의 북마크",
              "정보 수정",
              "로그아웃",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ height: "64px" }}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "5px",
              padding: "16px",
              height: "20%",
              backgroundColor: "#EAEAED",
            }}
          >
            <Typography fontSize={12}>Copyright ⓒ 2023</Typography>
            <Typography fontSize={12}>
              by A307 왕자공쥬들 all rights reserved.
            </Typography>

            {/* <Typography fontSize={12}></Typography> */}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}