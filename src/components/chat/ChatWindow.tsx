import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Fab,
  Collapse,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatWindow: React.FC = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hi there! 👋', sender: 'bot' },
  ]);
  const [input, setInput] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
    setInput('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Toggle Button */}
      {!open && (
        <Fab
          color="primary"
          onClick={() => setOpen(true)}
          variant="extended"
          size="medium"
        >
          <ChatIcon sx={{ mr: 1 }} /> Chat
        </Fab>
      )}

      <Collapse in={open}>
        <Paper
          elevation={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 500,
            width: 360,
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: theme.palette.background.paper,
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 4px 16px rgba(0,0,0,0.7)'
                : '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Chat</Typography>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: theme.palette.primary.contrastText }}
              size="small"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
              overflowY: 'auto',
              bgcolor: theme.palette.background.default,
            }}
          >
            <List>
              {messages.map((msg, index) => {
                const isUser = msg.sender === 'user';
                const bubbleColor = isUser
                  ? theme.palette.primary.dark
                  : theme.palette.grey[800];
                const textColor = theme.palette.getContrastText(bubbleColor);

                return (
                  <ListItem
                    key={index}
                    sx={{
                      justifyContent: isUser ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <ListItemText
                      primary={msg.text}
                      sx={{
                        maxWidth: '70%',
                        p: 1,
                        borderRadius: 2,
                        bgcolor: bubbleColor,
                        color: textColor,
                      }}
                    />
                  </ListItem>
                );
              })}
              <div ref={messagesEndRef} />
            </List>
          </Box>

          {/* Input */}
          <Box
            sx={{
              display: 'flex',
              p: 1,
              borderTop: `1px solid ${theme.palette.divider}`,
              bgcolor: theme.palette.background.paper,
            }}
          >
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <IconButton color="primary" onClick={handleSend} sx={{ ml: 1 }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default ChatWindow;
