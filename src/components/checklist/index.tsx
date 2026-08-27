import { Plus, Trash2 } from 'lucide-react-native';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from './style';
import { useState } from 'react';

const CheckList = () => {
  const [items, setItems] = useState(['Add your first task']);
  function addItem() {
    setItems(current => [...current, 'New checklist item']);
  }
  return (
    <View style={styles.notePanel}>
      <Text style={styles.panelHeading}>Checklist</Text>
      <Text style={styles.panelHint}>
        Turn your thoughts into small, clear steps.
      </Text>
      {items.map((item, index) => (
        <View key={`${item}-${index}`} style={styles.checkRow}>
          <View style={styles.emptyCheck} />
          <TextInput
            defaultValue={item}
            style={styles.checkInput}
            placeholderTextColor="#7E879D"
          />
          <Trash2 color="#778197" size={17} />
        </View>
      ))}
      <Pressable style={styles.addItem} onPress={addItem}>
        <Plus color="#B7B4FF" size={17} />
        <Text style={styles.addItemText}>Add item</Text>
      </Pressable>
    </View>
  );
};
export default CheckList;
