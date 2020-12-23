import React from "react";
import MaterialTable from "material-table";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

export default function MyDecks(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <MaterialTable
        options={{
          ...props.options,
          ...{
            rowStyle: (rowData, index) => {
              if (index % 2) {
                return { backgroundColor: "#f2f2f2" };
              }
            },
            showTitle: false,
            toolbar: false,
            actionsColumnIndex: -1,
            paging: true,
            pageSize: 10,
            emptyRowsWhenPaging: true,
            showSelectAllCheckbox: false,
            search: false,
            sorting: true,
          },
        }}
        columns={[
          { title: "Deck Name", field: "deckName" },
          { title: "Description", field: "description" },
          { title: "Total Cards", field: "numCards", type: "numeric" },
          { title: "Available Cards", field: "available", type: "numeric" },
          { title: "user_deck_id", field: "user_deck_id", hidden: true },
        ]}
        data={props.data}
        title={props.title}
        actions={[
          // {
          //   icon: () => <AddBoxIcon />,
          //   tooltip: "Quick-Add Flashcard!",
          //   onClick: (event, rowData) => {
          //     props.handleAdd;
          //   },
          // },
          {
            icon: () => <OpenInBrowserIcon />,
            tooltip: "Run Deck!",
            onClick: (event, rowData) => {
              props.handleRun(rowData.user_deck_id);
            },
          },
        ]}
      />
    </>
  );
}
