import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

interface IListItem {
  data: any;
  itemKey: string[];
  onClick: any;
}

const ListItemKit: React.FC<IListItem> = (props) => {
  const { data, itemKey, onClick } = props;
  return (
    <ListItem sx={{ cursor: "pointer" }} onClick={() => onClick(data)}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data[itemKey[0]]} secondary={data[itemKey[1]]} />
    </ListItem>
  );
};

export default ListItemKit;
