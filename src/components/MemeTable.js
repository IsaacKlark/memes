import {
  Table, Modal, Input,
  TableHeader, TableRow,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  TableCell, TableBody, TableColumn, Button
} from '@heroui/react';
import { useState } from 'react';
import { useMemes } from '../useMemes';

const columns = [
  {
    key: 'ID',
    label: 'ID'
  },
  {
    key: 'Name',
    label: 'Назва'
  },
  {
    key: 'Image',
    label: 'Картинка'
  },
  {
    key: 'Actions',
    label: 'Actions'
  },
]

function MemeTable() {
  const [memes, setMemes] = useMemes();
  const [editing, setEditing] = useState(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleEdit = (meme) => {
    setEditing(meme);
    onOpen()
  };

  const handleSave = (onClose) => {
    const urlPattern = /^https?:\/\/.+/;
    if (urlPattern.test(editing.image)
      && editing.image
      && editing.name.length >= 3
      && editing.name.length <= 100
      && editing.likes >= 0
      && editing.likes < 100
    ) {
      setMemes(memes.map(m => m.id === editing.id ? editing : m));
      onClose();
    }

  };

  return (
    <>
      <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Редагувати мем</ModalHeader>
              <ModalBody>
                <Input
                  label="ID"
                  value={editing.id}
                  readOnly
                />
                <Input
                  label="Назва"
                  value={editing.name}
                  onChange={e => setEditing({ ...editing, name: e.target.value })}
                  required
                  minLength={3}
                  maxLength={100}
                />
                <Input
                  label="Картинка"
                  value={editing.image}
                  onChange={e => setEditing({ ...editing, image: e.target.value })}
                  required
                  pattern="https?://.*"
                />
                <Input
                  type="number"
                  min="0"
                  max="99"
                  label="Вподобайки"
                  value={editing.likes}
                  required
                  onChange={e => {
                    if (+e.target.value >= 0 && +e.target.value <= 99) {
                      setEditing({ ...editing, likes: +e.target.value })
                    }
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрити
                </Button>
                <Button onPress={() => handleSave(onClose)}>Зберегти</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Table isStriped>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={memes}>
          {memes.map(meme => (
            <TableRow className='row' key={meme.id}>
              <TableCell className="table-cell">{meme.id}</TableCell>
              <TableCell className="table-cell">{meme.name}</TableCell>
              <TableCell className="table-cell">
                {meme.image}
              </TableCell>
              <TableCell className="table-cell">
                <Button variant="solid" color="primary" onPress={() => handleEdit(meme)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default MemeTable;