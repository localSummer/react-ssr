import { connect } from 'react-redux'
import PageContainer from '../PageContainer'
import withStyles from 'isomorphic-style-loader/withStyles'

export default ({ styles, mapStateToProps = {}, mapDispatchToProps = {} }, ActiveComponent) => {
  return withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PageContainer(ActiveComponent)))
}