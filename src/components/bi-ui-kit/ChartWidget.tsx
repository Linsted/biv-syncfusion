// src/components/bi-ui-kit/ChartWidget.tsx
import {
  AccumulationChartComponent,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  BarSeries,
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  LineSeries,
  PieSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

interface ChartWidgetProps {
  title: string;
  // isLoading and isError need to be handled by the parent before rendering this component
  data: any[];
  dataKey: string;
  type?: "column" | "pie" | "line" | "groupbar";
}

export const ChartWidget = ({
  title,
  data,
  dataKey,
  type = "column",
}: ChartWidgetProps) => {
  if (type === "pie") {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h3>{title}</h3>
        <AccumulationChartComponent
          tooltip={{ enable: true }}
          legendSettings={{ visible: true }}
          height="90%"
        >
          <Inject
            services={[PieSeries, AccumulationLegend, AccumulationTooltip]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data}
              xName="name"
              yName="value"
              type="Pie"
              dataLabel={{ visible: true, name: "name" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    );
  }
  if (type === "line") {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h3>{title}</h3>
        <ChartComponent
          primaryXAxis={{ valueType: "Category", title: "Day" }}
          primaryYAxis={{ title: "Value" }}
          tooltip={{ enable: true }}
          legendSettings={{ visible: true }}
          height="90%"
        >
          <Inject services={[LineSeries, Legend, Tooltip, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="name"
              yName={dataKey}
              name={dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
              type="Line"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }
  if (type === "groupbar") {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h3>{title}</h3>
        <ChartComponent
          primaryXAxis={{ valueType: "Category", title: "Day" }}
          primaryYAxis={{ title: "Value" }}
          tooltip={{ enable: true }}
          legendSettings={{ visible: true }}
          height="90%"
        >
          <Inject services={[BarSeries, Legend, Tooltip, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="name"
              yName="groupA"
              name="Group A"
              type="Bar"
            />
            <SeriesDirective
              dataSource={data}
              xName="name"
              yName="groupB"
              name="Group B"
              type="Bar"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    );
  }
  // Default: column
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h3>{title}</h3>
      <ChartComponent
        primaryXAxis={{ valueType: "Category", title: "Day" }}
        primaryYAxis={{ title: "Value" }}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true }}
        height="90%"
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            xName="name"
            yName={dataKey}
            name={dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
            type="Column"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
