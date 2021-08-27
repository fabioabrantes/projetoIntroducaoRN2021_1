import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonContainer: {
    backgroundColor: '#1f1e66',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  inputTextTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Inter-Medium',
    fontSize: 18,
  },
  iconsContainer: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  divisorIcons: {
    width: 24,
  },
});
export {styles};
