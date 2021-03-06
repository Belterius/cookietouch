import Account from "@/account";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import MapViewer from "@renderer/pages/tabs/Map/MapViewer";
import * as React from "react";

type style = "root";

const styles: StyleRulesCallback<style> = theme => ({
  root: {
    flexGrow: 1
  }
});

interface IProps {
  account: Account;
}

type Props = IProps & WithStyles<style>;

class Map extends React.Component<Props, {}> {
  public render() {
    const { account, classes } = this.props;

    return (
      <div className={classes.root}>
        <MapViewer account={account} />
      </div>
    );
  }
}

export default withStyles(styles)<IProps>(Map);
