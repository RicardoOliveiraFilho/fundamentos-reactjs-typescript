import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDelete: (comment: string) => void;
}

export function Comment({ content, onDelete }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDelete(content)
    }

    function handleLikeComment() {
        /*
            Estado do React relacionado com Closures.
            Sempre que uma informação precisar ser atualizada com base nela mesma
            é bom usar o padrão das closures.
        */
        setLikeCount((currentState) => {
            return currentState + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ricardooliveirafilho.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ricardo Oliveira</strong>
                            <time title="29 de Junho às 09:56h" dateTime="2022-06-29 09:56:30">Cerca de 1h atrás</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}