import {
  Table, Modal, Input,
  TableHeader, TableRow, Image,
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
  const [modalOpen, setModalOpen] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleEdit = (meme) => {
    setEditing(meme);
    setModalOpen(true);
  };

  const handleSave = () => {
    setMemes(memes.map(m => m.id === editing.id ? editing : m));
    setModalOpen(false);
  };

  return (
    <>
      {/* <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      {editing ? null : <Table isStriped>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={memes}>
          {memes.map(meme => (
            <TableRow className='row' key={meme.id}>
              <TableCell className="table-cell">{meme.id}</TableCell>
              <TableCell className="table-cell">{meme.name}</TableCell>
              <TableCell className="table-cell">
                <div className='table-image-wrapper'>
                  <Image src={meme.image} alt={meme.name} width={250} />
                </div>
              </TableCell>
              <TableCell className="table-cell">
                <Button variant="solid" color="primary" onPress={() => handleEdit(meme)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>}

      {editing && (
        <Modal isOpen={true} open={modalOpen} onClose={() => setModalOpen(false)}>
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


    </>
  );
}

export default MemeTable;