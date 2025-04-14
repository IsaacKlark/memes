import { Table,  Modal, Input, 
  TableHeader, TableRow, 
  TableCell, TableBody, TableColumn, Button } from '@heroui/react';
import { useState } from 'react';
import { useMemes } from '../useMemes';
// import {Button} from "@heroui/button";

function MemeTable() {
  const [memes, setMemes] = useMemes();
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (meme) => {
    setEditing(meme);
    setModalOpen(true);
  };

  const handleSave = () => {
    setMemes(memes.map(m => m.id === editing.id ? editing : m));
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Назва</TableColumn>
          <TableColumn>Картинка</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map(meme => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell><img src={meme.image} alt={meme.name} className="w-20" /></TableCell>
              <TableCell>
              {/* <Button color="primary">Primary</Button> */}
                <Button variant="solid" color="primary" onPress={() => handleEdit(meme)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {editing && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Редагувати мем</h2>
            <Input
              label="Назва"
              value={editing.name}
              onChange={e => setEditing({ ...editing, name: e.target.value })}
              required
              minLengTableCell={3}
              maxLengTableCell={100}
            />
            <Input
              label="Картинка"
              value={editing.image}
              onChange={e => setEditing({ ...editing, image: e.target.value })}
              required
              pattern="https?://.*\\.(jpg|jpeg)"
            />
            <Button onClick={handleSave}>Зберегти</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default MemeTable;