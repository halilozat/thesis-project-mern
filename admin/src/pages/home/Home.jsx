import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";


export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Ocak",
      "Subat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Agustos",
      "Eylul",
      "Ekim",
      "Kasim",
      "Aralik",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/v1/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGJlZDdkYjE5NTJlMDUzODZkMzU2ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODE3Njg2NCwiZXhwIjoxNjI4NjA4ODY0fQ.2Fk6SQJv9dJNo2ZBYBoqJ8HsHK2TimHrz-YTNtp4UUM",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Yeni Üye": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);


  return (
    <div className="home">

      <FeaturedInfo />
      <Chart data={userStats} title="Üye İstatistikleri" grid dataKey="Yeni Üye" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
