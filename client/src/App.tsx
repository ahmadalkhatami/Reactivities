import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setactivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:6001/api/activities')
      .then((response: { data: Activity[] }) => {
        setactivities(response.data);
      });
  }, []);

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
